import React from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useRole from '../../hooks/useRole';
import BloodBank from '../BloodBank/BloodBank';
import BloodDoner from '../BloodDoner/BloodDoner';
import MakeAdmin from './MakeAdmin';

const Dashboard = () => {
    const [userInfo, loading] = useAuthState(auth);
    useEffect(() => {
        if (loading) return
    }, [userInfo?.email])
    const role = useRole(userInfo?.email);
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    {
                        role === "Admin" ? <><li>
                            <Link to={`/dashboard/makeadmin`}>Make Admin</Link></li>
                        </> : null
                    }
                    {/* Do the code here */}
                    {
                        role === "Doctor" ? <><li>
                            <Link to={`/dashboard/bloodDoner`}>Donate Blood</Link></li>

                        </> : null
                    }
                    {
                        role === "Patient" ? <><li>

                            <Link to={`/dashboard/bloodDoner`}>Donate Blood</Link></li>

                        </> : null
                    }
                    <li><a>Sidebar Item 2</a></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;