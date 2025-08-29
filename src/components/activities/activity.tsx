import { 
  Clock,
  CheckCircle2,
  Play,
  ArrowRight,
  Code,
  Database,
  Globe,
  Zap,
  CircleCheckBig 
} from "lucide-react";

export default function Activity() {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-bold">Activities</h1>
          </div>
        </div>

        {/* Current Project */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Play className="w-6 h-6 text-green-600" />
            <h2 className="text-2xl font-semibold">Current Project</h2>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Car Rental Project
                  </h3>
                  <div className="flex items-center gap-2 text-purple-100">
                    <Clock className="w-4 h-4" />
                    <span>In Progress</span>
                  </div>
                </div>
                <div className="bg-white/20 rounded-full p-3">
                  <Code className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <Code className="w-5 h-5 text-indigo-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-800">TypeScript Migration</p>
                    <p className="text-sm text-gray-600">Refactor codebase to TypeScript for better type safety</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <Zap className="w-5 h-5 text-indigo-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-800">Performance Optimization</p>
                    <p className="text-sm text-gray-600">Implement Redux and React Query for better state management and data fetching</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <CircleCheckBig className="w-5 h-5 text-indigo-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-800">Proper validation implementation</p>
                    <p className="text-sm text-gray-600">Zod and React Hook form for better api and form validation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Next Project */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <ArrowRight className="w-6 h-6 text-purple-600" />
            <h2 className="text-2xl font-semibold">Up Next</h2>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Student Attendance Management System
                  </h3>
                  <div className="flex items-center gap-2 text-green-100">
                    <Clock className="w-4 h-4" />
                    <span>Planned</span>
                  </div>
                </div>
                <div className="bg-white/20 rounded-full p-3">
                  <Database className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <h4 className="font-semibold mb-3">Planned Improvements</h4>
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <Code className="w-5 h-5 text-indigo-600 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-800">Project Enhancement</p>
                  <p className="text-sm text-gray-600">Add more features to make it a full student management system</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Progress Overview */}
        {/* <div className="mt-8 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-6 text-white">
          <h3 className="text-lg font-semibold mb-3">Development Focus</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">1</div>
              <div className="text-gray-300">Active Project</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">1</div>
              <div className="text-gray-300">Planned Project</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">50%</div>
              <div className="text-gray-300">Overall Progress</div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}