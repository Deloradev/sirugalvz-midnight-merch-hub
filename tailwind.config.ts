
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
                midnight: {
                    50: '#f0eefb',
                    100: '#dbd2f3',
                    200: '#bbaae6',
                    300: '#9b80d7',
                    400: '#7a55c7',
                    500: '#6640b8',
                    600: '#5a329d',
                    700: '#4a237f',
                    800: '#3c1762',
                    900: '#240046',
                },
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
                'pulse-glow': {
                    '0%, 100%': { 
                        boxShadow: '0 0 10px 2px rgba(146, 115, 209, 0.2)',
                        transform: 'scale(1)'
                    },
                    '50%': { 
                        boxShadow: '0 0 20px 4px rgba(146, 115, 209, 0.4)',
                        transform: 'scale(1.02)'
                    },
                },
                'fade-in': {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' }
                },
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
                'pulse-glow': 'pulse-glow 2s infinite ease-in-out',
                'fade-in': 'fade-in 0.5s ease-out forwards',
			},
            backgroundImage: {
                'midnight-gradient': 'linear-gradient(to bottom, #240046, #5A189A)',
                'midnight-light': 'linear-gradient(to bottom, #5A189A, #7B2CBF)',
                'star-pattern': 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
            },
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
