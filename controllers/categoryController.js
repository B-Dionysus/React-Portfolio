//  Connect to db
// const db = require('../models');
const db = 'hello';

// Export Controller Methods
module.exports = {
    loadCatInfo: function(req, res) {
        let aboutText="According to his resume, Benjamin is:<blockquote>A hardworking and resourceful Software Engineer with experience in web design, software development, program and project management, technology implementation, software management, and user support. Leverages attention to detail and analytical skills to troubleshoot technology issues and develop effective solutions. A creative and technically skilled producer who delivers high-quality web experiences.</blockquote>According to Cicero:<blockquote>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?</blockquote>";
        
        res.json({title:"Benjamin Dionysus", text:aboutText});
    }
};