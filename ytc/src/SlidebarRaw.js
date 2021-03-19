import'./SlidebarRaw.css';
function SlidebarRaw({Icon, title,selected}){
         
    return(
        <div className={`slidebarraw ${selected && 'selected'}`}>
        <Icon className='slidebarraw__icon' />
        <h2 className='slidebarraw__title'>{title}</h2>
        </div>
)
}

export default SlidebarRaw;