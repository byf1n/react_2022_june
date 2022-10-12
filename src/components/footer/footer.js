import './footer.css';

const Footer = () => {

    return (
        <div>
            <div className={'footer'}>
                <div className={'footer_blocks'}>
                    <div className={'footer_1'}>
                        <div>г. Киев</div>
                        <div>office@budroof.com.ua</div>
                        <div> +380675482048</div>
                    </div>
                    <div className={'footer_2'}>
                        <p>Меню услуг</p>
                        <div>Проектирование кровли</div>
                        <div>Проектирование кровли</div>
                        <div>Проектирование кровли</div>
                        <div>Проектирование кровли</div>
                    </div>
                    <div className={'footer_3'}>
                        <p>МЕНЮ МАТЕРИАЛЫ</p>
                        <div>ПВХ мембрана</div>
                        <div>ПВХ мембрана</div>
                        <div>ПВХ мембрана</div>
                        <div>ПВХ мембрана</div>
                    </div>
                </div>

                <div className={'footer_last'}>Copyright © 2007 – 2022. ТОВ "Бадруф" кровля и гидроизоляция</div>
            </div>
        </div>
    )
}
export {Footer};