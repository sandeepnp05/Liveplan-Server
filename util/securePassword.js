import bcrypt from 'bcryptjs'

const securePassword = async (password)=>{
    try {
        const saltRound = 10
        const salt = await bcrypt.genSalt(saltRound);
        const hashed = await bcrypt.hash(password,salt)
        return hashed;
    } catch (error) {
        console.log(`Error in secure password ${error.message}`)
        throw new Error('Password hashing failed')
    }
} 
export default securePassword; 