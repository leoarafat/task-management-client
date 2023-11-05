/* eslint-disable react/no-unescaped-entities */
import React from "react";

const FAQSection = () => {
  return (
    <section className="p-12 bg-[#090D1D]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-gray-300 mb-6">
          Frequently Asked Questions
        </h2>
        <div className="grid gap-6">
          <div className="border border-gray-300 p-4 rounded-md">
            <h3 className="text-xl font-semibold mb-2">
              1. How do I create a new task?
            </h3>
            <p>
              To create a new task, log in to your account, navigate to the
              Tasks section, and click the "Add Task" button. Fill in the task
              details and click "Save" to create the task.
            </p>
          </div>
          <div className="border border-gray-300 p-4 rounded-md">
            <h3 className="text-xl font-semibold mb-2">
              2. Can I assign tasks to other team members?
            </h3>
            <p>
              Yes, you can assign tasks to other team members. When creating or
              editing a task, you can specify the assignee by selecting their
              name from the assignee dropdown list.
            </p>
          </div>
          <div className="border border-gray-300 p-4 rounded-md">
            <h3 className="text-xl font-semibold mb-2">
              3. How do I set task deadlines?
            </h3>
            <p>
              To set a task deadline, open the task details, and you'll find a
              "Due Date" field. Pick the date and time by which the task should
              be completed and save the task.
            </p>
          </div>
          <div className="border border-gray-300 p-4 rounded-md">
            <h3 className="text-xl font-semibold mb-2">
              4. Can I categorize tasks into different projects?
            </h3>
            <p>
              Yes, you can categorize tasks into different projects. When
              creating or editing a task, you can associate it with a specific
              project or category.
            </p>
          </div>
          <div className="border border-gray-300 p-4 rounded-md">
            <h3 className="text-xl font-semibold mb-2">
              5. How do I mark a task as completed?
            </h3>
            <p>
              To mark a task as completed, open the task details, and you'll
              find a "Mark as Completed" button. Click it to update the task
              status to completed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
