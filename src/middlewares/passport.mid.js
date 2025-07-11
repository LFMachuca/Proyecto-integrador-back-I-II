import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { ExtractJwt, Strategy as JwtStrategy } from "passport-jwt";
import { usersRepository } from "../repositories/repository.js";
import { createHash, compareHash } from "../helpers/hash.helper.js";
import { createToken } from "../helpers/token.helper.js";
import { verify } from "crypto";
import verifyEmail from "../helpers/verifyEmail.helper.js";

passport.use(
  "register",
  new LocalStrategy(
    { passReqToCallback: true, usernameField: "email" },
    async (req, email, password, done) => {
      try {
        if (!req.body.city) {
          const error = new Error("Invalid data");
          error.statusCode = 400;
          throw error;
        }
        let user = await usersRepository.readBy({ email });
        if (user) {
          const error = new Error("Invalid credentials");
          error.statusCode = 401;
          throw error;
        }
        user = await usersRepository.createOne(req.body);
        await verifyEmail(user.email, user.verifyCode);
        done(null, user);
      } catch (error) {
        done(error);
      }
    }
  )
);
passport.use(
  "login",
  new LocalStrategy(
    { passReqToCallback: true, usernameField: "email" },
    async (req, email, password, done) => {
      try {
        const user = await usersRepository.readBy({ email });
        if (!user) {
          const error = new Error("invalid  email");
          error.statusCode = 401;
          throw error;
        }

        const verifyPassword = compareHash(password, user.password);

        if (!verifyPassword) {
          const error = new Error("Invalid password ");
          error.statusCode = 401;
          throw error;
        }
        const { isVerified } = user;
        if (!isVerified) {
          return done(null, null, {
            message: "Please verify your account",
            statusCode: 401,
          });
        }
        const data = {
          user_id: user._id,
          email: user.email,
          role: user.role,
        };
        const token = createToken(data);
        user.token = token;
        done(null, user);
      } catch (error) {
        done(error);
      }
    }
  )
);
passport.use(
  "current",
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromExtractors([(req) => req?.cookies?.token]),
      secretOrKey: process.env.SECRET,
    },
    async (data, done) => {
      try {
        const { user_id, email, role } = data;
        const user = await usersRepository.readBy({
          _id: user_id,
          email,
          role,
        });
        if (!user) {
          const error = new Error("Forbbiden");
          error.statusCode = 403;
          throw error;
        }
        const currentUser = {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        };
        done(null, currentUser);
      } catch (error) {
        done(error);
      }
    }
  )
);
passport.use(
  "admin",
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromExtractors([(req) => req?.cookies?.token]),
      secretOrKey: process.env.SECRET,
    },
    async (data, done) => {
      try {
        const { user_id, email, role } = data;
        const user = await usersRepository.readBy({
          _id: user_id,
          email,
          role,
        });
        if (!user || user.role !== "ADMIN") {
          const error = new Error("Forbbiden");
          error.statusCode = 403;
          throw error;
        }
        done(null, user);
      } catch (error) {
        done(error);
      }
    }
  )
);

export default passport;
