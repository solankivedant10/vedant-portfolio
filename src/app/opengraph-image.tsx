import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Vedant Solanki - Software Developer & AI Enthusiast'
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
                    backgroundColor: '#09090b', // Zinc 950
                    backgroundImage: 'radial-gradient(circle at top, #1e1b4b 0%, #09090b 100%)', // Subtle Indigo top depth
                }}
            >
                {/* Background Grid Pattern (Simplified for OG) */}
                <div 
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                    }}
                />

                {/* Accent Orbs */}
                <div
                    style={{
                        position: 'absolute',
                        top: '-10%',
                        left: '-5%',
                        width: '600px',
                        height: '600px',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        bottom: '-10%',
                        right: '-5%',
                        width: '600px',
                        height: '600px',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.05) 0%, transparent 70%)',
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
                    <div
                        style={{
                            fontSize: 84,
                            fontWeight: 'bold',
                            color: '#ffffff',
                            marginBottom: 8,
                            letterSpacing: '-0.04em',
                        }}
                    >
                        Vedant Solanki
                    </div>

                    <div
                        style={{
                            fontSize: 32,
                            fontWeight: 500,
                            color: '#a1a1aa', // Zinc 400
                            marginBottom: 48,
                        }}
                    >
                        Software Developer & AI Enthusiast
                    </div>

                    {/* Tech Badges */}
                    <div style={{ display: 'flex', gap: 12 }}>
                        {['Next.js', 'TypeScript', 'Autonomous Agents', 'Gemini'].map((tech) => (
                            <div
                                key={tech}
                                style={{
                                    padding: '10px 24px',
                                    borderRadius: 30,
                                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    color: '#f4f4f5',
                                    fontSize: 20,
                                    fontWeight: 600,
                                }}
                            >
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>

                <div
                    style={{
                        position: 'absolute',
                        bottom: 40,
                        fontSize: 22,
                        fontWeight: 600,
                        color: '#52525b', // Zinc 600
                        letterSpacing: '0.1em',
                    }}
                >
                    VEDANTSOLANKI.COM
                </div>
            </div>
        ),
        { ...size }
    )
}