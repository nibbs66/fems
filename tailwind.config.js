
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'bgImg': "url('../public/img/femsachtergrond.jpeg')",
            },

            backgroundSize: {
                '400%': '400%'
            },
            animation: {
              'colorTransition': 'bgScroll 10s infinite alternate',
               tilt: 'tilt 10s infinite linear'
            },
            keyframes :{
            bgScroll:{
                '0%': {'backgroundPosition': 'left'},
                '100%': {'backgroundPosition': 'right'},
            },
                tilt: {
                "0%, 50%, 100%": {
                    transform: 'rotate(0deg)',
                },
                    '25%': {
                        transform: 'rotate(1deg)',



                    },
                    '75%': {
                        transform: 'rotate(-1deg)',
                    }
                }
            },

            },

    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}
