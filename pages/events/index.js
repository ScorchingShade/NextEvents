import React from 'react'
import { getAllEvents } from '../../dummy-data';

function AllEventsPage() {

    const events = getAllEvents();

    return (
        <div>
            <h1>All Events</h1>
        </div>
    )
}

export default AllEventsPage
