//gt10
export default function requireRole(...allowed) {
  return (req, res, next) => {
    // verifyToken is what sets req.user, so it must run first
    if (!req.user) {
      return res.status(401).json({ error: "Log in first" });
    }
    if (!allowed.includes(req.user.role)) {
      return res.status(403).json({ error: "Only admin may do this" });
    }
    next();
  };
}