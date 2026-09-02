import { useState, useEffect, use } from 'react'
import JobListing from './Joblisting'
import Spinner from './Spinner'

const JobListings = ({ isHome = false }) => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch('http://localhost:8000/jobs');

                if (!response.ok) {
                    throw new Error('Failed to fetch jobs');
                }

                const data = await response.json();
                setJobs(isHome ? data.slice(0, 3) : data);
            } catch (error) {
                console.error('Error fetching jobs:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, [isHome]);

    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    {isHome ? 'Latest  Jobs' : 'Browse Jobs'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    { loading ? <Spinner loading={loading} /> : jobs.map((job) => (
                        <JobListing key={job.id} job={job} />
                    )) }

                </div>
            </div>
        </section>
    )
}

export default JobListings