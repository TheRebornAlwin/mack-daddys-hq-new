import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Play, Clock, CheckCircle, Lock, Star, BookOpen, Users, Award, ChevronDown, ChevronRight, Scissors, Crown, Diamond, Target, Zap, Shield, TrendingUp, Heart, Gift, Calendar, Download } from 'lucide-react';

interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  completed: boolean;
  locked: boolean;
}

interface Module {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
  completed: boolean;
  progress: number;
}

interface Course {
  id: string;
  title: string;
  description: string;
  modules: Module[];
  totalLessons: number;
  completedLessons: number;
  estimatedTime: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
}

export default function CoursesPage() {
  const navigate = useNavigate();
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [expandedModules, setExpandedModules] = useState<Set<string>>(new Set());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const courses: Course[] = [
    {
      id: 'cutting-mastery',
      title: 'Complete Cutting Mastery',
      description: 'Master the fundamentals of hair cutting with Sean\'s proven shape and flow system',
      estimatedTime: '12 hours',
      difficulty: 'Beginner',
      category: 'Core Skills',
      totalLessons: 24,
      completedLessons: 3,
      modules: [
        {
          id: 'foundations',
          title: 'Cutting Foundations',
          description: 'Essential basics every stylist must master',
          completed: false,
          progress: 60,
          lessons: [
            {
              id: 'tools-setup',
              title: 'Tools & Setup',
              description: 'Learn about professional tools and proper workspace setup',
              duration: '15 min',
              completed: true,
              locked: false
            },
            {
              id: 'hair-analysis',
              title: 'Hair Analysis & Consultation',
              description: 'Master the art of reading hair texture, growth patterns, and client needs',
              duration: '25 min',
              completed: true,
              locked: false
            },
            {
              id: 'basic-techniques',
              title: 'Basic Cutting Techniques',
              description: 'Fundamental cutting methods and hand positioning',
              duration: '35 min',
              completed: true,
              locked: false
            },
            {
              id: 'sectioning',
              title: 'Sectioning Mastery',
              description: 'Perfect sectioning for consistent, professional results',
              duration: '20 min',
              completed: false,
              locked: false
            }
          ]
        },
        {
          id: 'shape-flow',
          title: 'Shape & Flow System',
          description: 'Sean\'s signature approach to creating beautiful, lasting cuts',
          completed: false,
          progress: 0,
          lessons: [
            {
              id: 'understanding-shape',
              title: 'Understanding Shape',
              description: 'How to see and create the perfect shape for any face',
              duration: '30 min',
              completed: false,
              locked: false
            },
            {
              id: 'flow-principles',
              title: 'Flow Principles',
              description: 'Creating movement and natural flow in every cut',
              duration: '40 min',
              completed: false,
              locked: false
            },
            {
              id: 'combining-elements',
              title: 'Combining Shape & Flow',
              description: 'Bringing it all together for stunning results',
              duration: '45 min',
              completed: false,
              locked: false
            }
          ]
        },
        {
          id: 'advanced-techniques',
          title: 'Advanced Techniques',
          description: 'Professional-level methods for complex cuts',
          completed: false,
          progress: 0,
          lessons: [
            {
              id: 'layering-mastery',
              title: 'Layering Mastery',
              description: 'Create perfect layers that enhance natural movement',
              duration: '35 min',
              completed: false,
              locked: true
            },
            {
              id: 'texturizing',
              title: 'Texturizing Techniques',
              description: 'Add texture and remove weight like a pro',
              duration: '30 min',
              completed: false,
              locked: true
            },
            {
              id: 'finishing-touches',
              title: 'Finishing Touches',
              description: 'The details that separate good from great',
              duration: '25 min',
              completed: false,
              locked: true
            }
          ]
        }
      ]
    },
    {
      id: 'business-mastery',
      title: 'Business Mastery System',
      description: 'Transform your skills into a profitable, sustainable business',
      estimatedTime: '8 hours',
      difficulty: 'Intermediate',
      category: 'Business',
      totalLessons: 18,
      completedLessons: 0,
      modules: [
        {
          id: 'pricing-strategies',
          title: 'Premium Pricing Strategies',
          description: 'Charge what you\'re worth with confidence',
          completed: false,
          progress: 0,
          lessons: [
            {
              id: 'value-pricing',
              title: 'Value-Based Pricing',
              description: 'Price based on value, not time',
              duration: '20 min',
              completed: false,
              locked: false
            },
            {
              id: 'client-psychology',
              title: 'Client Psychology',
              description: 'Understanding what clients really value',
              duration: '25 min',
              completed: false,
              locked: false
            }
          ]
        },
        {
          id: 'marketing',
          title: 'Marketing & Social Media',
          description: 'Build your brand and attract ideal clients',
          completed: false,
          progress: 0,
          lessons: [
            {
              id: 'social-strategy',
              title: 'Social Media Strategy',
              description: 'Create content that converts followers to clients',
              duration: '30 min',
              completed: false,
              locked: false
            },
            {
              id: 'client-retention',
              title: 'Client Retention',
              description: 'Keep clients coming back for years',
              duration: '25 min',
              completed: false,
              locked: false
            }
          ]
        }
      ]
    }
  ];

  const toggleModule = (moduleId: string) => {
    setExpandedModules(prev => {
      const newSet = new Set(prev);
      if (newSet.has(moduleId)) {
        newSet.delete(moduleId);
      } else {
        newSet.add(moduleId);
      }
      return newSet;
    });
  };

  const handleCourseSelect = (course: Course) => {
    setSelectedCourse(course);
    setSelectedModule(null);
    setSelectedLesson(null);
  };

  const handleModuleSelect = (module: Module) => {
    setSelectedModule(module);
    setSelectedLesson(null);
  };

  const handleLessonSelect = (lesson: Lesson) => {
    if (!lesson.locked) {
      setSelectedLesson(lesson);
    }
  };

  const handleBackToCourses = () => {
    setSelectedCourse(null);
    setSelectedModule(null);
    setSelectedLesson(null);
  };

  const handleBackToModules = () => {
    setSelectedModule(null);
    setSelectedLesson(null);
  };

  const handleBackToLessons = () => {
    setSelectedLesson(null);
  };

  // Course Overview View
  if (!selectedCourse) {
    return (
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        {/* Header */}
        <div className="bg-black/10 backdrop-blur-2xl border-b border-luxury/20 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex items-center justify-between">
              <button 
                onClick={() => navigate('/')}
                className="flex items-center text-gray-400 hover:text-luxury transition-colors duration-300 group"
              >
                <ArrowLeft className="h-5 w-5 mr-3 group-hover:-translate-x-1 transition-transform duration-300" />
                <span className="font-medium">Back to Home</span>
              </button>
              
              <div className="flex items-center">
                <Scissors className="h-7 w-7 text-luxury-gold mr-4" />
                <span className="text-2xl font-playfair font-bold tracking-wider text-gradient-gold">MACK DADDY'S</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-16">
          {/* Header */}
          <div className={`text-center mb-20 ${isVisible ? 'fade-in-luxury' : 'opacity-0'}`}>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-luxury-gradient rounded mb-8">
              <BookOpen className="h-10 w-10 text-black" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold mb-8 leading-tight">
              Your <span className="text-gradient-gold">Learning Journey</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Master the art of cutting hair with our comprehensive training system. 
              Each course is designed to build upon the last, taking you from beginner to expert.
            </p>
          </div>

          {/* Courses Grid */}
          <div className={`grid lg:grid-cols-2 gap-12 ${isVisible ? 'slide-in-luxury-delayed' : 'opacity-0'}`}>
            {courses.map((course, index) => (
              <div 
                key={course.id} 
                className={`card-luxury rounded-lg p-10 group hover:transform hover:-translate-y-2 transition-all duration-500 cursor-pointer ${isVisible ? 'slide-in-luxury' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 200}ms` }}
                onClick={() => handleCourseSelect(course)}
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <div className="badge-premium rounded px-4 py-2 mr-4">
                        <span className="text-white font-medium text-sm">{course.category}</span>
                      </div>
                      <div className="badge-burgundy rounded px-3 py-1">
                        <span className="text-white text-xs font-medium">{course.difficulty}</span>
                      </div>
                    </div>
                    <h3 className="text-3xl font-playfair font-bold text-white mb-4 group-hover:text-luxury transition-colors duration-300">
                      {course.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                      {course.description}
                    </p>
                  </div>
                  <div className="ml-6">
                    <div className="w-16 h-16 bg-luxury-gradient rounded flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {course.id === 'cutting-mastery' ? (
                        <Scissors className="h-8 w-8 text-black" />
                      ) : (
                        <TrendingUp className="h-8 w-8 text-black" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-400 text-sm">Progress</span>
                    <span className="text-luxury font-medium text-sm">
                      {course.completedLessons}/{course.totalLessons} lessons
                    </span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div 
                      className="bg-luxury-gradient h-2 rounded-full transition-all duration-500"
                      style={{ width: `${(course.completedLessons / course.totalLessons) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Course Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center">
                    <Clock className="h-5 w-5 text-luxury mx-auto mb-2" />
                    <div className="text-white font-medium text-sm">{course.estimatedTime}</div>
                    <div className="text-gray-400 text-xs">Duration</div>
                  </div>
                  <div className="text-center">
                    <BookOpen className="h-5 w-5 text-luxury mx-auto mb-2" />
                    <div className="text-white font-medium text-sm">{course.modules.length} Modules</div>
                    <div className="text-gray-400 text-xs">Sections</div>
                  </div>
                  <div className="text-center">
                    <Award className="h-5 w-5 text-luxury mx-auto mb-2" />
                    <div className="text-white font-medium text-sm">{course.totalLessons} Lessons</div>
                    <div className="text-gray-400 text-xs">Total</div>
                  </div>
                </div>

                <button className="w-full btn-luxury text-black font-bold py-4 rounded text-lg group-hover:scale-105 transition-transform duration-300">
                  <span className="flex items-center justify-center">
                    Open Course
                    <ChevronRight className="ml-3 h-5 w-5" />
                  </span>
                </button>
              </div>
            ))}
          </div>

          {/* Additional Features */}
          <div className={`mt-20 grid md:grid-cols-3 gap-8 ${isVisible ? 'slide-in-luxury-delayed-2' : 'opacity-0'}`}>
            {[
              {
                icon: <Users className="h-8 w-8" />,
                title: "Community Access",
                description: "Connect with fellow students and get support 24/7"
              },
              {
                icon: <Calendar className="h-8 w-8" />,
                title: "Live Q&A Sessions",
                description: "Monthly group calls with Sean for personalized guidance"
              },
              {
                icon: <Download className="h-8 w-8" />,
                title: "Downloadable Resources",
                description: "Print-friendly guides and reference materials"
              }
            ].map((feature, index) => (
              <div key={index} className="card-burgundy rounded-lg p-8 text-center group hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-luxury-gradient rounded mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-black">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gradient-gold mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Module View
  if (selectedCourse && !selectedModule) {
    return (
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        {/* Header */}
        <div className="bg-black/10 backdrop-blur-2xl border-b border-luxury/20 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex items-center justify-between">
              <button 
                onClick={handleBackToCourses}
                className="flex items-center text-gray-400 hover:text-luxury transition-colors duration-300 group"
              >
                <ArrowLeft className="h-5 w-5 mr-3 group-hover:-translate-x-1 transition-transform duration-300" />
                <span className="font-medium">Back to Courses</span>
              </button>
              
              <div className="flex items-center">
                <Scissors className="h-7 w-7 text-luxury-gold mr-4" />
                <span className="text-2xl font-playfair font-bold tracking-wider text-gradient-gold">MACK DADDY'S</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-16">
          {/* Course Header */}
          <div className="text-center mb-16 fade-in-luxury">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-luxury-gradient rounded mb-8">
              {selectedCourse.id === 'cutting-mastery' ? (
                <Scissors className="h-10 w-10 text-black" />
              ) : (
                <TrendingUp className="h-10 w-10 text-black" />
              )}
            </div>
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              {selectedCourse.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              {selectedCourse.description}
            </p>
            
            {/* Course Progress */}
            <div className="card-luxury rounded-lg p-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-300">Overall Progress</span>
                <span className="text-luxury font-bold">
                  {selectedCourse.completedLessons}/{selectedCourse.totalLessons} lessons
                </span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-3">
                <div 
                  className="bg-luxury-gradient h-3 rounded-full transition-all duration-500"
                  style={{ width: `${(selectedCourse.completedLessons / selectedCourse.totalLessons) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Modules Grid */}
          <div className={`space-y-8 ${isVisible ? 'slide-in-luxury-delayed' : 'opacity-0'}`}>
            {selectedCourse.modules.map((module, index) => (
              <div 
                key={module.id}
                className={`card-luxury rounded-lg p-8 group hover:transform hover:-translate-y-1 transition-all duration-300 slide-in-luxury`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-luxury-gradient rounded flex items-center justify-center mr-6">
                      <span className="text-black font-bold text-lg">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-playfair font-bold text-white group-hover:text-luxury transition-colors duration-300">
                        {module.title}
                      </h3>
                      <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                        {module.description}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-luxury font-bold text-lg">{module.progress}%</div>
                    <div className="text-gray-400 text-sm">{module.lessons.length} lessons</div>
                  </div>
                </div>

                {/* Module Progress Bar */}
                <div className="mb-6">
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div 
                      className="bg-luxury-gradient h-2 rounded-full transition-all duration-500"
                      style={{ width: `${module.progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Lessons Preview */}
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {module.lessons.slice(0, 4).map((lesson, lessonIndex) => (
                    <div key={lesson.id} className="flex items-center text-gray-300">
                      {lesson.completed ? (
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                      ) : lesson.locked ? (
                        <Lock className="h-4 w-4 text-gray-500 mr-3 flex-shrink-0" />
                      ) : (
                        <Play className="h-4 w-4 text-luxury mr-3 flex-shrink-0" />
                      )}
                      <span className="text-sm">{lesson.title}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => handleModuleSelect(module)}
                  className="w-full btn-luxury text-black font-bold py-4 rounded text-lg group-hover:scale-105 transition-transform duration-300"
                >
                  <span className="flex items-center justify-center">
                    Open Module
                    <ChevronRight className="ml-3 h-5 w-5" />
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Lesson View
  if (selectedLesson) {
    return (
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        {/* Header */}
        <div className="bg-black/10 backdrop-blur-2xl border-b border-luxury/20 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex items-center justify-between">
              <button 
                onClick={handleBackToLessons}
                className="flex items-center text-gray-400 hover:text-luxury transition-colors duration-300 group"
              >
                <ArrowLeft className="h-5 w-5 mr-3 group-hover:-translate-x-1 transition-transform duration-300" />
                <span className="font-medium">Back to Lessons</span>
              </button>
              
              <div className="flex items-center">
                <Scissors className="h-7 w-7 text-luxury-gold mr-4" />
                <span className="text-2xl font-playfair font-bold tracking-wider text-gradient-gold">MACK DADDY'S</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-16">
          {/* Lesson Header */}
          <div className="mb-12 fade-in-luxury">
            <div className="flex items-center mb-6">
              <div className="badge-premium rounded px-4 py-2 mr-4">
                <span className="text-white font-medium text-sm">{selectedModule?.title}</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Clock className="h-4 w-4 mr-2" />
                <span className="text-sm">{selectedLesson.duration}</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              {selectedLesson.title}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl">
              {selectedLesson.description}
            </p>
          </div>

          {/* Video Player Placeholder */}
          <div className="card-luxury rounded-lg p-2 mb-12 slide-in-luxury">
            <div className="relative bg-gray-900 rounded-lg overflow-hidden aspect-video">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-luxury-gradient rounded mb-6 hover:scale-110 transition-transform cursor-pointer">
                    <Play className="h-10 w-10 text-black ml-1" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{selectedLesson.title}</h3>
                  <p className="text-gray-300">Video content will be loaded here</p>
                  <div className="mt-4 text-luxury font-medium">{selectedLesson.duration}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Lesson Content */}
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="card-luxury rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-playfair font-bold text-gradient-gold mb-6">Lesson Overview</h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    This lesson covers the essential techniques and concepts you need to master this skill. 
                    Follow along with the video and practice the techniques shown.
                  </p>
                  <p>
                    Take your time with each step and don't hesitate to replay sections as needed. 
                    Mastery comes through repetition and understanding.
                  </p>
                </div>
              </div>

              <div className="card-luxury rounded-lg p-8">
                <h3 className="text-2xl font-playfair font-bold text-gradient-gold mb-6">Key Takeaways</h3>
                <div className="space-y-3">
                  {[
                    "Master the fundamental techniques demonstrated",
                    "Practice the hand positions and movements",
                    "Understand the theory behind each method",
                    "Apply these skills in your next practice session"
                  ].map((takeaway, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-luxury-gold mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {/* Lesson Progress */}
              <div className="card-burgundy rounded-lg p-6">
                <h4 className="text-lg font-bold text-gradient-gold mb-4">Your Progress</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Status</span>
                    <div className="flex items-center">
                      {selectedLesson.completed ? (
                        <>
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                          <span className="text-green-400 font-medium">Completed</span>
                        </>
                      ) : (
                        <>
                          <Play className="h-4 w-4 text-luxury mr-2" />
                          <span className="text-luxury font-medium">In Progress</span>
                        </>
                      )}
                    </div>
                  </div>
                  <button className="w-full btn-luxury text-black font-bold py-3 rounded">
                    Mark as Complete
                  </button>
                </div>
              </div>

              {/* Resources */}
              <div className="card-burgundy rounded-lg p-6">
                <h4 className="text-lg font-bold text-gradient-gold mb-4">Resources</h4>
                <div className="space-y-3">
                  <button className="w-full text-left border border-luxury/30 rounded-lg p-3 hover:border-luxury transition-colors duration-300">
                    <div className="flex items-center">
                      <Download className="h-4 w-4 text-luxury mr-3" />
                      <span className="text-white text-sm">Practice Guide PDF</span>
                    </div>
                  </button>
                  <button className="w-full text-left border border-luxury/30 rounded-lg p-3 hover:border-luxury transition-colors duration-300">
                    <div className="flex items-center">
                      <BookOpen className="h-4 w-4 text-luxury mr-3" />
                      <span className="text-white text-sm">Reference Materials</span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Next Lesson */}
              <div className="card-luxury rounded-lg p-6">
                <h4 className="text-lg font-bold text-white mb-4">Up Next</h4>
                <div className="space-y-3">
                  <p className="text-gray-300 text-sm">Continue your learning journey</p>
                  <button className="w-full btn-luxury text-black font-bold py-3 rounded text-sm">
                    Next Lesson
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Module Lessons View
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Header */}
      <div className="bg-black/10 backdrop-blur-2xl border-b border-luxury/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <button 
              onClick={handleBackToModules}
              className="flex items-center text-gray-400 hover:text-luxury transition-colors duration-300 group"
            >
              <ArrowLeft className="h-5 w-5 mr-3 group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="font-medium">Back to Modules</span>
            </button>
            
            <div className="flex items-center">
              <Scissors className="h-7 w-7 text-luxury-gold mr-4" />
              <span className="text-2xl font-playfair font-bold tracking-wider text-gradient-gold">MACK DADDY'S</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Module Header */}
        <div className="text-center mb-16 fade-in-luxury">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-luxury-gradient rounded mb-8">
            <BookOpen className="h-10 w-10 text-black" />
          </div>
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            {selectedModule?.title}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            {selectedModule?.description}
          </p>
          
          {/* Module Progress */}
          <div className="card-luxury rounded-lg p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-300">Module Progress</span>
              <span className="text-luxury font-bold">{selectedModule?.progress}%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-3">
              <div 
                className="bg-luxury-gradient h-3 rounded-full transition-all duration-500"
                style={{ width: `${selectedModule?.progress}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Lessons List */}
        <div className={`space-y-6 ${isVisible ? 'slide-in-luxury-delayed' : 'opacity-0'}`}>
          {selectedModule?.lessons.map((lesson, index) => (
            <div 
              key={lesson.id}
              className={`card-luxury rounded-lg p-8 group transition-all duration-300 slide-in-luxury ${
                lesson.locked 
                  ? 'opacity-60 cursor-not-allowed' 
                  : 'hover:transform hover:-translate-y-1 cursor-pointer'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => handleLessonSelect(lesson)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center flex-1">
                  <div className="w-12 h-12 bg-luxury-gradient rounded flex items-center justify-center mr-6">
                    {lesson.completed ? (
                      <CheckCircle className="h-6 w-6 text-black" />
                    ) : lesson.locked ? (
                      <Lock className="h-6 w-6 text-black" />
                    ) : (
                      <Play className="h-6 w-6 text-black" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-luxury transition-colors duration-300">
                      {lesson.title}
                    </h3>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 mb-3">
                      {lesson.description}
                    </p>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-gray-400 text-sm">{lesson.duration}</span>
                      {lesson.completed && (
                        <div className="ml-4 flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                          <span className="text-green-400 text-sm font-medium">Completed</span>
                        </div>
                      )}
                      {lesson.locked && (
                        <div className="ml-4 flex items-center">
                          <Lock className="h-4 w-4 text-gray-500 mr-2" />
                          <span className="text-gray-500 text-sm">Locked</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                {!lesson.locked && (
                  <ChevronRight className="h-6 w-6 text-luxury group-hover:translate-x-1 transition-transform duration-300" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Module Completion */}
        {selectedModule && selectedModule.progress === 100 && (
          <div className="card-luxury rounded-lg p-10 mt-12 text-center border-l-4 border-luxury">
            <Crown className="h-12 w-12 text-luxury-gold mx-auto mb-6" />
            <h3 className="text-2xl font-playfair font-bold text-gradient-gold mb-4">Module Complete!</h3>
            <p className="text-gray-300 mb-6">
              Congratulations on completing this module. You're one step closer to mastery!
            </p>
            <button className="btn-luxury text-black font-bold px-8 py-4 rounded">
              Continue to Next Module
            </button>
          </div>
        )}
      </div>
    </div>
  );
}