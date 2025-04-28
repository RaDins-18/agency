'use client';

import { House } from "lucide-react";
import { Bar } from 'react-chartjs-2';
import Head from "next/head";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from "react";
import AdminLayout from "../../components/layouts/adminLayout";

export default function AdminPage() {
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

  const [blogData, setBlogData] = useState([]);
  const [projectData, setProjectData] = useState([]);
  const [galleryData, setGalleryData] = useState([]);
  const [loading, setloading] = useState(true);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Blogs Created Monthly by Year'
      }
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/blogs');
        const responseProject = await fetch('/api/projects');
        const responseGallery = await fetch('/api/photos');

        const data = await response.json();
        const dataProject = await responseProject.json();
        const dataGallery = await responseGallery.json();

        setBlogData(data);
        setProjectData(dataProject);
        setGalleryData(dataGallery);
        setloading(false);

      } catch (error) {
        setloading(false);
      }
    }

    fetchData();
  }, []);

  const monthlyData = blogData.filter(dat => dat.status === 'publish').reduce((acc, blog) => {
    const year = new Date(blog.createdAt).getFullYear();
    const month = new Date(blog.createdAt).getMonth();

    acc[year] = acc[year] || Array(12).fill(0);
    acc[year][month]++;

    return acc;
  }, {});

  const currentYear = new Date().getFullYear();
  const years = Object.keys(monthlyData);
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const datasets = years.map(year => ({
    label: `${year}`,
    data: monthlyData[year] || Array(12).fill(0),
    backgroundColor: `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.8)`
  }));

  const data = {
    labels,
    datasets
  }

  return (
    <AdminLayout>
      <Head>
        <title>Portfolio Backend</title>
        <meta name="description" content="Blog website backend" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="relative h-full mt-28 p-[2rem] z-10">
        <div className="relative flex justify-between items-center mb-4">
          <div>
            <h2 className="text-2xl font-bold text-purple-600">Admin <span className="text-gray-900">Dashboard</span></h2>
            <h3 className="text-md font-semibold tracking-widest text-purple-600">ADMIN PANEL</h3>
          </div>
          <div className="flex items-center gap-1 text-purple-600 font-semibold">
            <House className="w-4" />
            <span>/</span>
            <span>Dashboard</span>
          </div>
        </div>

        {/* Dashboard Cards */}
        <div className="w-full h-full flex flex-wrap justify-between gap-4 pt-[1rem] pb-[4rem] mt-[2rem]">
          <div
            className="relative w-[32%] h-60 flex flex-col justify-center items-center rounded-[50px] shadow-lg text-center mb-[1rem]"
            style={{
              backgroundImage: 'linear-gradient(to bottom right, #9358e0, #571f9e)',
              boxShadow: '2px 12px 26px 3px rgba(126, 55, 216, 0.3)'
            }}
          >
            <h2 className="text-xl font-semibold" style={{ textShadow: "0 0 10px #999" }}>Total Blogs</h2>
            <span className="w-36 bg-[#5d66bda7] text-center absolute bottom-0 text-2xl p-3 rounded-t-2xl">{blogData.filter(dat => dat.status === 'publish').length}</span>
          </div>
          <div
            className="relative w-[32%] h-60 flex flex-col justify-center items-center rounded-[50px] shadow-lg text-center mb-[1rem]"
            style={{
              backgroundImage: 'linear-gradient(to bottom right, #ff9cc3, #fd3484)',
              boxShadow: '2px 12px 26px 3px rgba(254, 128, 178, .3)'
            }}
          >
            <h2 className="text-xl font-semibold" style={{ textShadow: "0 0 10px #999" }}>Total Projects</h2>
            <span className="w-36 bg-[#5d66bda7] text-center absolute bottom-0 text-2xl p-3 rounded-t-2xl">{projectData.filter(dat => dat.status === 'publish').length}</span>
          </div>
          <div 
            className="relative w-[32%] h-60 flex flex-col justify-center items-center rounded-[50px] shadow-lg text-center mb-[1rem]"
            style={{
              backgroundImage: 'linear-gradient(to bottom right, #00aeff, #007cb6)',
              boxShadow: '2px 12px 26px 3px rgba(255, 199, 23, .3)'
            }}
          >
            <h2 className="text-xl font-semibold" style={{ textShadow: "0 0 10px #999" }}>Gallery Photos</h2>
            <span className="w-36 bg-[#5d66bda7] text-center absolute bottom-0 text-2xl p-3 rounded-t-2xl">{galleryData.length}</span>
          </div>
        </div>

        {/* Year Overview */}
        <div className="year_overview flex justify-between gap-6">
          <div className="leftyearoverview w-2/3 bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-800">Year Overview</h3>
              <ul className="creative-dots flex gap-2">
                <li className="big-dot w-2 h-2 bg-blue-600 rounded-full"></li>
                <li className="semi-big-dot w-3 h-3 bg-green-600 rounded-full"></li>
                <li className="medium-dot w-2.5 h-2.5 bg-red-600 rounded-full"></li>
                <li className="semi-medium-dot w-3 h-3 bg-yellow-600 rounded-full"></li>
                <li className="small-dot w-2 h-2 bg-purple-600 rounded-full"></li>
                <li className="semi-small-dot w-1.5 h-1.5 bg-pink-600 rounded-full"></li>
              </ul>
              <h3 className="text-right text-lg text-gray-600">
                {blogData.filter(dat => dat.status === 'publish').length} / 365
                <br />
                <span className="text-gray-400">Total Published</span>
              </h3>
            </div>
            <Bar data={data} options={options} />
          </div>

          <div className="right_salescont w-1/3 bg-white p-6 rounded-lg shadow-lg">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Blogs By Category</h3>
              <ul className="creative-dots flex gap-2 mb-4">
                <li className="big-dot w-2 h-2 bg-blue-600 rounded-full"></li>
                <li className="semi-big-dot w-3 h-3 bg-green-600 rounded-full"></li>
                <li className="medium-dot w-2.5 h-2.5 bg-red-600 rounded-full"></li>
                <li className="semi-medium-dot w-3 h-3 bg-yellow-600 rounded-full"></li>
                <li className="small-dot w-2 h-2 bg-purple-600 rounded-full"></li>
                <li className="semi-small-dot w-1.5 h-1.5 bg-pink-600 rounded-full"></li>
              </ul>
            </div>
            <div className="blogscategory flex justify-center">
              <table className="mt-4 w-full text-left">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 px-4 text-gray-700">Topics</th>
                    <th className="py-2 px-4 text-gray-700">Data</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4">Next Js</td>
                    <td className="py-2 px-4">{blogData.filter(dat => dat.blogCategory[0] === 'Next Js').length}</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4">Css</td>
                    <td className="py-2 px-4">{blogData.filter(dat => dat.blogCategory[0] === 'Css').length}</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4">Node Js</td>
                    <td className="py-2 px-4">{blogData.filter(dat => dat.blogCategory[0] === 'Node Js').length}</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4">Flutter Dev</td>
                    <td className="py-2 px-4">{blogData.filter(dat => dat.blogCategory[0] === 'Flutter Dev').length}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
