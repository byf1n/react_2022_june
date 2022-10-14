import header from './banner.jpg'
import './Header.css';
const Header = () => {

    return (
        <div>
            <header style={{ backgroundImage: `url(${header})` }} className={'header'}>
                    <div className={'header_1'}>f t y g</div>
                    <div className={'header_2'}>0675482048</div>
            </header>
        </div>
    )
}
export {Header};