import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'

import MainLayout from './layouts/MainLayout'
import JobsPage from './pages/JobsPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import JobPage, { jobLoader } from './pages/JobPage'
import AddJobPage from './pages/AddJobPage'

// Function to handle job submission
const addJobSubmit = async (newJob) => {
  try {
    const response = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });

    if (!response.ok) {
      throw new Error('Failed to add job');
    }

    const data = await response.json();
    console.log('Job added successfully:', data);
  } catch (error) {
    console.error('Error adding job:', error);
  }
};

// Delete function to handle job deletion
const deleteJob = async (jobId) => {
  try {
    const response = await fetch(`/api/jobs/${jobId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Failed to delete job');
    }

    console.log('Job deleted successfully');
  } catch (error) {
    console.error('Error deleting job:', error);
  }
}



const App = () => {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route
          path="/jobs/:id"
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        
        <Route
          path="/add-job"
          element={<AddJobPage addJobSubmit={addJobSubmit} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />
}

export default App