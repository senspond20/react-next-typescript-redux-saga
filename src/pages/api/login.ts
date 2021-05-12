// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
    const email = req.body;
    console.log(email)
    res.status(200).json({ email : 'sdfemail' })
}
