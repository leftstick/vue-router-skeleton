module.exports = {
    prompts: {
        name: {
            type: 'string',
            required: true,
            message: 'Project name'
        },
        description: {
            type: 'string',
            required: false,
            message: 'Project description',
            default: 'I just want to give it a try'
        },
        author: {
            type: 'string',
            message: 'Author',
            default: process.env.USER || process.env.USERPROFILE.split(require('path').sep)[2]
        },
        email: {
            type: 'string',
            required: false,
            message: 'Author email',
            validate: function(val) {
                if (!val) {
                    return true;
                }
                return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(val);
            }
        },
        mode: {
            type: 'list',
            message: 'mode',
            choices: ['hash', 'history', 'abstract'],
            default: 'hash'
        }
    },
    completeMessage: 'To get started:\n\n  cd {{destDirName}}\n  npm install\n  npm start\n\nDocumentation can be found at https://github.com/leftstick/vue-router-skeleton'
};
