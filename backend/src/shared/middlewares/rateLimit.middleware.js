import { rateLimit, ipKeyGenerator } from "express-rate-limit";

export const rateLimiter = () => {
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minute
    limit: 10, // limit each IP to 10 requests per windowMs
    standardHeaders: true,
    legacyHeaders: false,
    // keyGenerator: (req) => {
    //   // guest user
    //   return ipKeyGenerator(req.ip);
    // },
    message: {
      success: false,
      message: "Too many requests, please try again later.",
    },
  });

  return limiter;
};
