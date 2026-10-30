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
				// STRATA Architectural Studio Palette
				stone: {
					50: '#FAF9F5',
					100: '#F6F5F0', // Travertine alabaster
					200: '#EAE7DF', // Warm architectural concrete
					300: '#DAD5C8',
					400: '#B8B19F',
					500: '#948D7A',
					600: '#6E6857',
					700: '#4D483A',
					800: '#2A2720',
					900: '#181816', // Anodized bronze / charcoal
					950: '#0F0F0E',
				},
				terracotta: {
					DEFAULT: '#C85A32',
					50: '#FBF2EE',
					100: '#F6E3DB',
					200: '#EDC5B5',
					300: '#E2A18A',
					400: '#D57C5E',
					500: '#C85A32',
					600: '#A64522',
					700: '#7E3419',
					800: '#552210',
					900: '#32140A',
				},
				verdigris: {
					DEFAULT: '#2E6F5E', // Oxidized copper / EPD green
					50: '#F0F7F5',
					100: '#DFEFEA',
					200: '#BFDFD5',
					300: '#95C9BC',
					400: '#5FA996',
					500: '#2E6F5E',
					600: '#24594B',
					700: '#1C443A',
					800: '#133029',
					900: '#0C1D19',
				},
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
			fontFamily: {
				mono: ['"JetBrains Mono"', '"Space Mono"', 'ui-monospace', 'monospace'],
				sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
				serif: ['"Fraunces"', '"Instrument Serif"', 'Georgia', 'serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'scanline': {
					'0%': { transform: 'translateY(-100%)' },
					'100%': { transform: 'translateY(1000%)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'scanline': 'scanline 8s linear infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
