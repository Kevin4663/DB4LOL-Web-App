import ratelimit from "../config/upstash.js"

const rateLimiter = async (req, res, next) => {
    try {
        //my-limit-key should be per user replace with userid if auth added
        const {success} = await ratelimit.limit("my-limit-key")
        if(!success) {
            return res.status(429).json({
                message:"Too many request, please try again later"
            })
        }
        next();
    } catch (error) {
        console.log("Rate limit Error");
    }
};

export default rateLimiter