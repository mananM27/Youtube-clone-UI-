import React from 'react';
import './Searchpage.css';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
import Videorow from './Videorow';


function Searchpage() {
    return (
        <div className='searchpage'>
            <div className='searchpage__filter'>
            <TuneOutlinedIcon title='Filter'/> 
            <h2>Filter</h2>
            </div>
            <hr/>
            <ChannelRow
            chnlimage='https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/2347653/settings_images/0zNwQpHuTTGTm9Z91yHb_rafeh-qazi.png'
            channel='Clever Progammer'
            Verfied
            subs='658K'
            noOfVids={358}
            disc='You can find the best tutorial about computer engineering on my this youtube channel'
            />
            <hr/>
            <Videorow  
            img='https://miro.medium.com/max/2560/1*J6jEqNvW0wWAblO1FPVtTQ.jpeg'
            views='1.4M'
            subs='659k'
            disc='Do you check my playlist'
            title='Lets build Clone Of YT'
            channel='Cleaver Programmer'
            timestamp='59 second Ago'
            />
            <Videorow  
            img='https://miro.medium.com/max/2560/1*J6jEqNvW0wWAblO1FPVtTQ.jpeg'
            views='1.4M'
            subs='659k'
            disc='Do you check my playlist'
            title='Lets build Clone Of YT'
            channel='Cleaver Programmer'
            timestamp='59 second Ago'
            />
            <Videorow  
            img='https://miro.medium.com/max/2560/1*J6jEqNvW0wWAblO1FPVtTQ.jpeg'
            views='1.4M'
            subs='659k'
            disc='Do you check my playlist'
            title='Lets build Clone Of YT'
            channel='Cleaver Programmer'
            timestamp='59 second Ago'
            />
            <Videorow  
            img='https://miro.medium.com/max/2560/1*J6jEqNvW0wWAblO1FPVtTQ.jpeg'
            views='1.4M'
            subs='659k'
            disc='Do you check my playlist'
            title='Lets build Clone Of YT'
            channel='Cleaver Programmer'
            timestamp='59 second Ago'
            />
            <Videorow  
            img='https://miro.medium.com/max/2560/1*J6jEqNvW0wWAblO1FPVtTQ.jpeg'
            views='1.4M'
            subs='659k'
            disc='Do you check my playlist'
            title='Lets build Clone Of YT'
            channel='Cleaver Programmer'
            timestamp='59 second Ago'
            />
            <Videorow  
            img='https://miro.medium.com/max/2560/1*J6jEqNvW0wWAblO1FPVtTQ.jpeg'
            views='1.4M'
            subs='659k'
            disc='Do you check my playlist'
            title='Lets build Clone Of YT'
            channel='Cleaver Programmer'
            timestamp='59 second Ago'
            />
            <Videorow  
            img='https://miro.medium.com/max/2560/1*J6jEqNvW0wWAblO1FPVtTQ.jpeg'
            views='1.4M'
            subs='659k'
            disc='Do you check my playlist'
            title='Lets build Clone Of YT'
            channel='Cleaver Programmer'
            timestamp='59 second Ago'
            />
            <Videorow  
            img='https://miro.medium.com/max/2560/1*J6jEqNvW0wWAblO1FPVtTQ.jpeg'
            views='1.4M'
            subs='659k'
            disc='Do you check my playlist'
            title='Lets build Clone Of YT'
            channel='Cleaver Programmer'
            timestamp='59 second Ago'
            />
            
            
        </div>
    )
}

export default Searchpage;
