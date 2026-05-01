import Pagination from '@/Components/Pagination';
import SearchResult from '@/Components/SearchResult';
import TrendingStartups from '@/Components/TrendingStartups'
import AppLayout from '@/Layouts/AppLayout'
import { usePage } from '@inertiajs/react';
import React from 'react'

export default function index() {
    const props = usePage().props;
    const jobListings = props.jobsListings;
    const search = props.results;
  const isSearching = props.filter;
    console.log(search)
  
    const updatedPageNumber = ()=>{

    }
   
  return (
        <AppLayout>
          {isSearching.length > 0? (<SearchResult search={search} SectionTitle={"Result for Job search"}/>):(
          <TrendingStartups jobListings={jobListings} SectionTitle={"Job Archive"}/>)}
          <Pagination pagination={jobListings.meta} updatedPageNumber={updatedPageNumber}/>
        </AppLayout>
  )
}
