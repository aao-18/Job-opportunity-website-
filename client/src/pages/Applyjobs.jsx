import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import { assets } from "../assets/assets";
import moment from "moment";
import JobCard from "../components/JobCard";
import Footer from "../components/Footer";

const Applyjobs = () => {
  const { id } = useParams();

  const [jobsData, setJobsData] = useState(null);

  const { jobs } = useContext(AppContext);

  const fetchJobs = async () => {
    const data = jobs.find((job) => job._id === id);
    if (data) {
      setJobsData(data);
      console.log(data);
    }
  };

  useEffect(() => {
    if (jobs.length > 0) {
      fetchJobs();
    }
  }, [id, jobs]);

  return jobsData ? (
    <>
      <Navbar />
      <div className="main-h-screen flex flex-col py-10 container px-4 2xl:px-18 mx-auto">
        <div className=" bg-white text-black rounded-lg w-full">
          <div className=" flex justify-center md:justify-between flex-wrap gap-8 px-14 py-12 mb-6 bg-sky-50 border border-sky-400 rounded-xl">
            <div className=" flex flex-col  md:flex-row items-center">
              <img
                className=" h-24 w-24 bg-white rounded-lg p-4 mr-4 max-md:mb-4 border "
                src={jobsData.companyId.logo}
                alt={jobsData.companyId.name}
              />
              <div className="text-center md:text-left text-neutral-700">
                <h1 className="text-2xl font-medium sm:text-4xl">
                  {jobsData.title}
                </h1>
                <div className=" flex flex-row flex-wrap max-md:justify-center gap-y-2 gap-6 items-center text-gray-600 mt-5">
                  <span className=" flex items-center gap-1">
                    <img src={assets.suitcase_icon} alt="" />
                    {jobsData.companyId.name}
                  </span>
                  <span className=" flex items-center gap-1">
                    <img src={assets.location_icon} alt="" />
                    {jobsData.location}
                  </span>
                  <span className=" flex items-center gap-1">
                    <img src={assets.person_icon} alt="" />
                    {jobsData.level}
                  </span>
                  <span className=" flex items-center gap-1">
                    <img src={assets.money_icon} alt="" />
                    CTC:{jobsData.salary}
                  </span>
                </div>
              </div>
            </div>
            <div className=" flex flex-col justify-center text-end text-sm max-md:mx-auto max-md:text-center">
              <button className=" bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                Apply Now
              </button>
              <p className=" mt-1 text-gray-600">
                posted {moment(jobsData.date).fromNow()}
              </p>
            </div>
          </div>

          <div className=" flex flex-col lg:flex-row justify-between items-start">
            <div className=" w-full ">
              <h2 className=" text-2xl font-semibold mb-4">Job description</h2>
              <div
                className="rich-text"
                dangerouslySetInnerHTML={{ __html: jobsData.description }}
              ></div>
              <button className=" bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300 mt-6">
                Apply Now
              </button>
            </div>
            <div>
              {/* right section more jobs */}
              <div className=" w-full lg:w-3/4 mt-8 lg:ml-10 space-y-5">
                <h2>More jobs from {jobsData.companyId.name}</h2>
                {jobs
                  .filter(
                    (job) =>
                      job._id !== jobsData._id &&
                      job.companyId._id === jobsData.companyId._id,
                  )
                  .filter((job) => true)
                  .slice(0, 3)
                  .map((job, index) => (
                    <JobCard key={index} job={job} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <Loading />
  );
};

export default Applyjobs;
