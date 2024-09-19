import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './WeeklyReport.css';

const WeeklyReport = () => {
    const [reportData, setReportData] = useState([]);
    const [selectedDate, setSelectedDate] = useState('');
    const [dailyReport, setDailyReport] = useState([]);
    const [isDailyReportVisible, setIsDailyReportVisible] = useState(false);

    // Fetch the weekly report
    useEffect(() => {
        const fetchWeeklyReport = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/appointments/weekly-report');
                setReportData(response.data);
            } catch (error) {
                console.error('Error fetching weekly report:', error);
            }
        };

        fetchWeeklyReport();
    }, []);

    // Fetch the daily report based on the selected date
    const generateDailyReport = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/appointments/report', {
                params: { appointmentDate: selectedDate },
            });
            setDailyReport(response.data);
            setIsDailyReportVisible(true);
        } catch (error) {
            console.error('Error fetching daily report:', error);
            alert('Failed to generate the daily report');
        }
    };

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };

    return (
        <div className="report-container">
            <h2>Generate Appointment Report by Date</h2>
            <div className="date-picker">
                <label>Select Date:</label>
                <input
                    type="date"
                    value={selectedDate}
                    onChange={handleDateChange}
                    required
                /><br/>
                <button onClick={generateDailyReport}>Generate Report</button>
            </div>

            {isDailyReportVisible && dailyReport.length > 0 && (
                <div className="daily-report">
                    <h3>Appointments for {selectedDate}:</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Booking ID</th>
                                <th>Username</th>
                                <th>Reason</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dailyReport.map((appointment, index) => (
                                <tr key={index}>
                                    <td>{appointment.bookingId}</td>
                                    <td>{appointment.username}</td>
                                    <td>{appointment.reason}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {isDailyReportVisible && dailyReport.length === 0 && (
                <p>No appointments found for the selected date.</p>
            )}
<br/><hr/><br/>
            <h2>Weekly Appointment Report</h2>
            <table>
                <thead>
                    <tr>
                        <th>Week Number</th>
                        <th>Reason</th>
                        <th>Number of Appointments</th>
                    </tr>
                </thead>
                <tbody>
                    {reportData.map((item, index) => (
                        <tr key={index}>
                            <td>{item._id.week}</td>
                            <td>{item._id.reason}</td>
                            <td>{item.count}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br/>
        </div>
    );
};

export default WeeklyReport;
