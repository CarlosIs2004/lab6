
export default[
    {
        file:['**/*.js'],
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