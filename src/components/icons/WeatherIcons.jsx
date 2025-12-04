import React from 'react'

export default function WeatherIcon({ type = 'Clear', size = 64 }) {
	const common = { width: size, height: size, viewBox: '0 0 64 64', xmlns: 'http://www.w3.org/2000/svg', className: 'weather-icon' }

	switch ((type || '').toLowerCase()) {
		case 'clear':
			return (
				<svg {...common} aria-hidden>
					<defs>
						<radialGradient id="sunGradStatic" cx="50%" cy="35%">
							<stop offset="0%" stopColor="#fff59a" />
							<stop offset="60%" stopColor="#ffd54f" />
							<stop offset="100%" stopColor="#ff8f00" />
						</radialGradient>
					</defs>
					<circle cx="32" cy="22" r="10" fill="url(#sunGradStatic)" />
					<g stroke="#ffb74d" strokeWidth="2" strokeLinecap="round">
						<line x1="32" y1="4" x2="32" y2="12" />
						<line x1="32" y1="32" x2="32" y2="40" />
						<line x1="16" y1="22" x2="24" y2="22" />
						<line x1="40" y1="22" x2="48" y2="22" />
					</g>
				</svg>
			)

		case 'clouds':
			return (
				<svg {...common} aria-hidden>
					<defs>
						<linearGradient id="cloudGradStatic" x1="0" x2="1">
							<stop offset="0%" stopColor="#e0e7ff" />
							<stop offset="100%" stopColor="#c7d2fe" />
						</linearGradient>
					</defs>
					<ellipse cx="36" cy="30" rx="18" ry="12" fill="url(#cloudGradStatic)" />
					<ellipse cx="22" cy="32" rx="12" ry="9" fill="url(#cloudGradStatic)" />
				</svg>
			)

		case 'rain':
		case 'drizzle':
			return (
				<svg {...common} aria-hidden>
					<ellipse cx="32" cy="22" rx="16" ry="10" fill="#e3f2fd" />
					<g>
						<path d="M24 34c0.8 1.6 1.6 3.2 0.5 4" stroke="#2196f3" strokeWidth="2.4" strokeLinecap="round" fill="none" />
						<path d="M32 34c0.8 1.6 1.6 3.2 0.5 4" stroke="#0288d1" strokeWidth="2.4" strokeLinecap="round" fill="none" />
						<path d="M40 34c0.8 1.6 1.6 3.2 0.5 4" stroke="#1976d2" strokeWidth="2.4" strokeLinecap="round" fill="none" />
					</g>
				</svg>
			)

		case 'snow':
			return (
				<svg {...common} aria-hidden>
					<ellipse cx="32" cy="22" rx="16" ry="10" fill="#f1f8ff" />
					<g stroke="#90a4ae" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="#e3f2fd">
						<circle cx="24" cy="40" r="2.6" />
						<circle cx="32" cy="44" r="2.6" />
						<circle cx="40" cy="40" r="2.6" />
					</g>
				</svg>
			)

		case 'thunderstorm':
			return (
				<svg {...common} aria-hidden>
					<ellipse cx="34" cy="22" rx="16" ry="10" fill="#eceff1" />
					<path d="M28 34 L36 34 L32 44 Z" fill="#ffd54f" stroke="#ffb300" strokeWidth="1" />
				</svg>
			)

		default:
			return (
				<svg {...common} aria-hidden>
					<circle cx="32" cy="32" r="14" fill="#b3e5fc" />
				</svg>
			)
	}
}
