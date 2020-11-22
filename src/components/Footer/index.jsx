import './Footer.css'

export const Footer = () => {
    

    return <>
        <footer>
            <div className="footer-contents">
                <div>개발자:</div>
                <div>박기홍 서혜지</div>
                <div>박다영</div>
            </div>
            <div className="footer-contents">
                <div>HandiMap</div>
                <div>contact:</div>
                <div>010-8376-4694</div>
            </div>
            <div className="footer-contents">
                <a href="https://github.com/architecture-swproject/handimap-client">
                    github
                </a>
            </div>
        </footer>
    </>
}