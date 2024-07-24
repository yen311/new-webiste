import React from 'react'

function AdminPage() {

    return (
        <main className="flex flex-col items-start justify-between p-24">
            <div className="w-full p-6 bg-white/30 rounded-lg shadow-lg hover:bg-primary hover:text-white hover:cursor-pointer">
                <a
                    className="text-2xl font-bold mb-4"
                    href="/admin/blogs"
                >Manage Blogs</a>
            </div>
        </main>
    )
}

export default AdminPage