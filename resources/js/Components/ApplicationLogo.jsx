import { config } from '@inertiajs/react';
import logo from '../../../public/assets/logo.png'
export default function ApplicationLogo(props) {

    return (<div>
        <div className='rounded-xl overflow-hidden w-50 h-50 flex justify-center align-center'>
            <img src={logo} width={70} height={70}/>
        </div>
        <p className='pt-3 text-lg text-center'>JobSphere:</p>
        </div>);
}
