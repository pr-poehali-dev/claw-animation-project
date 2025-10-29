import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}"
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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
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
				'claw-slash-1': {
					'0%': { transform: 'scaleX(0) rotate(-18deg)', transformOrigin: 'center left', opacity: '0', filter: 'blur(2px)' },
					'30%': { opacity: '1', filter: 'blur(1px)' },
					'100%': { transform: 'scaleX(1) rotate(-18deg)', transformOrigin: 'center left', opacity: '0.9', filter: 'blur(0px)' }
				},
				'claw-slash-2': {
					'0%': { transform: 'scaleX(0) rotate(-9deg)', transformOrigin: 'center left', opacity: '0', filter: 'blur(2px)' },
					'30%': { opacity: '1', filter: 'blur(1px)' },
					'100%': { transform: 'scaleX(1) rotate(-9deg)', transformOrigin: 'center left', opacity: '0.9', filter: 'blur(0px)' }
				},
				'claw-slash-3': {
					'0%': { transform: 'scaleX(0) rotate(0deg)', transformOrigin: 'center left', opacity: '0', filter: 'blur(2px)' },
					'30%': { opacity: '1', filter: 'blur(1px)' },
					'100%': { transform: 'scaleX(1) rotate(0deg)', transformOrigin: 'center left', opacity: '0.9', filter: 'blur(0px)' }
				},
				'reveal-content': {
					'0%': { opacity: '0', transform: 'scale(1.1)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				'fade-out': {
					'0%': { opacity: '1' },
					'100%': { opacity: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'claw-1': 'claw-slash-1 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s forwards',
				'claw-2': 'claw-slash-2 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) 0.5s forwards',
				'claw-3': 'claw-slash-3 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) 0.7s forwards',
				'reveal': 'reveal-content 0.8s ease-out 1.3s forwards',
				'fade-out-overlay': 'fade-out 0.5s ease-out 1.5s forwards'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;