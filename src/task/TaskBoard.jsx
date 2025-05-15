import { useState } from 'react';

import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";

export default function TaskBoard() {
    const defaultTask = {
        'id': crypto.randomUUID(),
        'title': "Learn React",
        'description': "I want to learn React such than I can treat it like my slave and make it do whateer I wan to do",
        "tags": ['we', 'react', 'js'],
        'priority': " High",
        'isFavorite': true,
    }
    const [tasks, setTasks] = useState([]);



    return (
        <div>
            <section className="mb-20" id="tasks">

                <div className="container">

                    <div className="p-2 flex justify-end">
                        <SearchTask />
                    </div>

                    <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
                        <TaskActions />
                        <TaskList tasks={tasks} />
                    </div>
                </div>
            </section>
        </div>
    );
}