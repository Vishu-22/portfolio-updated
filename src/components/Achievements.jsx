const Achievements = () => {
  const achievements = [
    {
      title: 'AWS Certified Developer',
      issuer: 'Amazon Web Services',
      date: '2024',
      icon: '🏆',
      color: 'from-orange-500 to-orange-600',
    },
    {
      title: 'React Advanced Patterns',
      issuer: 'Frontend Masters',
      date: '2024',
      icon: '⭐',
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Full Stack Web Development',
      issuer: 'FreeCodeCamp',
      date: '2023',
      icon: '🎓',
      color: 'from-green-500 to-green-600',
    },
    {
      title: 'JavaScript Algorithms',
      issuer: 'FreeCodeCamp',
      date: '2023',
      icon: '💻',
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      title: 'MongoDB Certified Developer',
      issuer: 'MongoDB University',
      date: '2023',
      icon: '📜',
      color: 'from-green-600 to-green-700',
    },
    {
      title: 'Git & GitHub Mastery',
      issuer: 'Udemy',
      date: '2023',
      icon: '🔧',
      color: 'from-red-500 to-red-600',
    },
  ]

  const stats = [
    { number: '50+', label: 'Projects Completed', icon: '🚀' },
    { number: '100+', label: 'Happy Clients', icon: '😊' },
    { number: '5+', label: 'Years Experience', icon: '💼' },
    { number: '1000+', label: 'Cups of Coffee', icon: '☕' },
  ]

  return (
    <section
      id="achievements"
      className="py-20 bg-gradient-to-br from-purple-50 to-pink-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 text-lg">
            Certifications and milestones
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-start space-x-4">
                <div
                  className={`bg-gradient-to-r ${achievement.color} w-16 h-16 rounded-lg flex items-center justify-center text-3xl flex-shrink-0`}
                >
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 mb-1">{achievement.issuer}</p>
                  <p className="text-sm text-gray-500">{achievement.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements

