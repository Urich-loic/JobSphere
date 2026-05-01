import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, router, useForm, usePage } from '@inertiajs/react';
import HeroSection from '@/Components/HeroSection';
import AppLayout from '@/Layouts/AppLayout';
import TrendingStartups from '@/Components/TrendingStartups';
import TrendingJobs from '@/Components/TrendingJobs';
import Signupform from '@/Components/Signupform';

export default function Index({ auth, laravelVersion, phpVersion,  }) {
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

    const props = usePage().props;

    const jobListings = props.jobsListings;
    const jobsListings_contract = props.jobsListings_contract;
    const jobsListings_full = props.jobsListings_full;
    const jobsListings_part = props.jobsListings_part;
    const searched = props.search;

    const { data, setData,get, post, processing, errors } = useForm({
      search: "",
    });


    function handleSubmit(e) {
    e.preventDefault();
    router.get("/job-listings?search=contract");
    }

   return (
    <AppLayout>
        <div className="min-h-80 w-full bg-white relative">
            {/* Pink Glow Background */}
            <div
                className="absolute z-9 z-index-9 w-100 h-50 inset-0"
                style={{backgroundImage: `radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #da2877 100%)`,
                backgroundSize: "100% 100%",
                }}
            />
            <HeroSection/>
        </div>
       
        <TrendingStartups jobListings={jobListings} SectionTitle={'Most recent jobs'}/>
       <section className="pb-20 px-4 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">
        
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 lg:gap-10">
        <div>
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Trending contract jobs
            </h2>
            <button type='submit' onClick={e=>handleSubmit(e)} className="text-sm underline">
              View all jobs
            </button>
          </div>

          {/* Jobs */}
          <TrendingJobs jobListings={jobsListings_contract.data} />

           <div className="flex justify-between items-center mb-6 mt-10">
            <h2 className="text-3xl font-bold text-gray-900">
              Trending full-time jobs
            </h2>
            <button type='submit' onClick={e=>handleSubmit(e)} className="text-sm underline">
              View all jobs
            </button>
          </div>
          <TrendingJobs jobListings={jobsListings_full.data} />

           <div className="flex justify-between items-center mb-6 mt-10">
            <h2 className="text-3xl font-bold text-gray-900">
              Trending part-time jobs
            </h2>
            <button type='submit' onClick={e=>handleSubmit(e)} className="text-sm underline">
              View all jobs
            </button>
          </div>
          <TrendingJobs jobListings={jobsListings_part.data} />
          </div>
        </div>
           {/* SIDEBAR */}
        <div className="space-y-6">
          {/* Signup box */}
          <Signupform/>

          {/* Info box */}
          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">
              Level up your job search
            </h3>

            <ul className="space-y-3 text-gray-600 text-sm">
              <li>🔍 Unique jobs in niche industries</li>
              <li>💰 Set salary & equity upfront</li>
              <li>⚙️ Personalized job filters</li>
              <li>📄 Showcase skills beyond a CV</li>
            </ul>
          </div>
        </div>
        </div>
      </div>
      </section>
       
    </AppLayout>
        
    
  );
}
