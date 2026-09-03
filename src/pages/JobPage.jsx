import React from 'react'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../components/Spinner';

const JobPage = () => {
    const { id } = useParams();
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJob = async () => {
            try {   
                const response = await fetch(`/api/jobs/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch job');
                }
                const data = await response.json();
                setJob(data);
            } catch (error) {
                console.error('Error fetching job:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchJob();
    }, []);

  return loading ? <Spinner /> : <h1> {job?.title} </h1>
}

export default JobPage