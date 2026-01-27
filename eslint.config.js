
export default[
    {
        files:['**/*.js'],
        languageOptions:{
            ecmaVersion: 'latest',
            SourceType:'module'
        },
        rules:{
            semi:['error', 'always'],
            quotes:['error', 'single']
        }
    }

]