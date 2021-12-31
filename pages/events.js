import Image from "next/image"
export default function Events(){
    return (
        <section className="hero">
        <div className="container">
            <div className="hero-inner">
                <div className="hero-copy">
                    <h1 className="hero-title mt-0">Landing template for startups</h1>
                    <p className="hero-paragraph">Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
                    <div className="hero-cta">
                        <a className="button button-primary" href="#">Buy it now</a>
                        <div className="lights-toggle">
                            <input id="lights-toggle" type="checkbox" name="lights-toggle" className="switch" checked="checked"/>
                            <label htmlFor="lights-toggle" className="text-xs"><span>Turn me <span className="label-text">dark</span></span></label>
                        </div>
                    </div>
                </div>
                <div className="hero-media">
                    <div className="header-illustration">
                        <Image className="header-illustration-image asset-light" src="dist/images/header-illustration-light.svg" alt="Header illustration"/>
                        <Image className="header-illustration-image asset-dark" src="dist/images/header-illustration-dark.svg" alt="Header illustration"/>
                    </div>
                    <div className="hero-media-illustration">
                        <Image className="hero-media-illustration-image asset-light" src="dist/images/hero-media-illustration-light.svg" alt="Hero media illustration"/>
                        <Image className="hero-media-illustration-image asset-dark" src="dist/images/hero-media-illustration-dark.svg" alt="Hero media illustration"/>
                    </div>
                    <div className="hero-media-container">
                        <Image className="hero-media-image asset-light" src="dist/images/hero-media-light.svg" alt="Hero media"/>
                        <Image className="hero-media-image asset-dark" src="dist/images/hero-media-dark.svg" alt="Hero media"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}