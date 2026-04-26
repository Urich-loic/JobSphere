import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link } from '@inertiajs/react';
import HeroSection from '@/Components/HeroSection';
import AppLayout from '@/Layouts/AppLayout';
import TrendingStartups from '@/Components/TrendingStartups';
import TrendingJobs from '@/Components/TrendingJobs';

export default function Index({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

   return (
    <AppLayout>
        <HeroSection/>
        <TrendingStartups/>
        <TrendingJobs/>
    </AppLayout>
        
    
  );
}
