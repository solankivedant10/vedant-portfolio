import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Vedant Solanki - Full Stack Developer & AI Enthusiast'
export const size = {
    width: 1200,
    height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#0a0a0a',
                    backgroundImage: 'linear-gradient(to bottom right, #0a0a0a, #1a1a2e)',
                }}
            >
                {/* Gradient Orbs */}
                <div
                    style={{
                        position: 'absolute',
                        top: '-100px',
                        left: '-100px',
                        width: '400px',
                        height: '400px',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        bottom: '-100px',
                        right: '-100px',
                        width: '400px',
                        height: '400px',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
                    }}
                />

                {/* Content */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 10,
                    }}
                >
                    {/* Name */}
                    <div
                        style={{
                            fontSize: 72,
                            fontWeight: 'bold',
                            color: '#fafafa',
                            marginBottom: 16,
                            letterSpacing: '-0.02em',
                        }}
                    >
                        Vedant Solanki
                    </div>

                    {/* Tagline */}
                    <div
                        style={{
                            fontSize: 32,
                            color: '#a3a3a3',
                            marginBottom: 40,
                        }}
                    >
                        Full Stack Developer & AI Enthusiast
                    </div>

                    {/* Tech Stack */}
                    <div
                        style={{
                            display: 'flex',
                            gap: 16,
                        }}
                    >
                        {['Next.js', 'TypeScript', 'AI/ML', 'Cloud'].map((tech) => (
                            <div
                                key={tech}
                                style={{
                                    padding: '8px 20px',
                                    borderRadius: 24,
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    color: '#e5e5e5',
                                    fontSize: 18,
                                }}
                            >
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Website URL */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: 40,
                        fontSize: 20,
                        color: '#737373',
                    }}
                >
                    vedantsolanki.com
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
