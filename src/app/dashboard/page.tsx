import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckSquare, Clock, Megaphone, MessageCircle, MessageSquare, Plus, Upload } from "lucide-react";
import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div className="p-4 space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 ">
        <Card className="bg-gradient-to-br from-gray-800 to-black text-white/80">
          <div className="flex flex-col items-center gap-4">
            <Plus />
            <h3 className="text-lg outfit">Create Task</h3>
          </div>
        </Card>
        <Card className="bg-gradient-to-br from-gray-800 to-black text-white/80">
          <div className="flex flex-col items-center gap-4">
            <Upload />
            <h3 className="text-lg outfit">Upload Document</h3>
          </div>
        </Card>
        <Card className="bg-gradient-to-br from-gray-800 to-black text-white/80">
          <div className="flex flex-col items-center gap-4">
            <MessageCircle />
            <h3 className="text-lg outfit">Post Meeting Feedback</h3>
          </div>
        </Card>
        <Card className="bg-gradient-to-br from-gray-800 to-black text-white/80">
          <div className="flex flex-col items-center gap-4">
            <Megaphone />
            <h3 className="text-lg outfit">New Announcement</h3>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
          {/* My Tasks Widget */}
          <Card className="p-6 bg-white/70 dark:bg-gray-800/70 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <CheckSquare className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white urban">
                  My Tasks
                </h3>
              </div>
              <Badge variant="secondary" className="bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-300 opensans">
                5 Active
              </Badge>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900 dark:text-white outfit">
                    Server Maintenance
                  </span>
                  <Badge variant="destructive" className="text-xs">
                    Urgent
                  </Badge>
                </div>
                <Progress value={75} className="h-2" />
                <p className="text-xs text-gray-500 dark:text-gray-400 opensans">Due: Tomorrow</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900 dark:text-white outfit">
                    Network Upgrade
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">45%</span>
                </div>
                <Progress value={45} className="h-2" />
                <p className="text-xs text-gray-500 dark:text-gray-400 opensans">Due: Next Week</p>
              </div>
            </div>
            <Button
              variant="ghost"
              className="w-full mt-4 text-sky-400 dark:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-900/50 rounded-xl outfit bg-black"
            >
              View All Tasks
            </Button>
          </Card>

          {/* Meeting Notes Widget */}
          <Card className="p-6 bg-white/70 dark:bg-gray-800/70 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <MessageSquare className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white outfit">
                  Meeting Notes
                </h3>
              </div>
              <Badge
                variant="secondary"
                className="bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300"
              >
                3 New
              </Badge>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Avatar className="w-8 h-8">
                  <AvatarFallback className="bg-blue-500 text-white text-xs outfit">SM</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-white opensans">
                    Sarah Miller
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 opensans">
                    Great progress on server upgrade...
                  </p>
                  <div className="flex items-center mt-1 text-xs text-gray-400 dark:text-gray-500">
                    <Clock className="w-3 h-3 mr-1" />2 hours ago
                  </div>
                </div>
              </div>
            </div>
            <Button
              variant="ghost"
              className="w-full mt-auto bg-black text-sky-400 dark:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-900/50 rounded-xl outfit"
            >
              View All Notes
            </Button>
          </Card>

          {/* Announcements Widget */}
          <Card className="p-6 bg-white/70 dark:bg-gray-800/70 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Megaphone className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white outfit">
                  Announcements
                </h3>
              </div>
              <Badge
                variant="secondary"
                className="bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300"
              >
                2 New
              </Badge>
            </div>
            <div className="space-y-3">
              <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white urban">
                  Maintenance Sunday 2 PM
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-300 opensans mt-1">
                  Server offline for routine maintenance
                </p>
              </div>
              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white urban">
                  New Security Protocols
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-300 opensans mt-1">
                  Updated security measures active
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              className="w-full mt-4 bg-black text-sky-400 dark:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-900/50 rounded-xl outfit"
            >
              View All Announcements
            </Button>
          </Card>
        </div>
    </div>
  );
};

export default Dashboard;
