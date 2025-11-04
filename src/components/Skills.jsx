const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: '🎨',
      skills: [
        { name: 'React', level: 90, color: 'from-blue-500 to-blue-600' },
        { name: 'JavaScript', level: 85, color: 'from-yellow-500 to-yellow-600' },
        { name: 'TypeScript', level: 80, color: 'from-blue-600 to-blue-700' },
        { name: 'Tailwind CSS', level: 90, color: 'from-cyan-500 to-cyan-600' },
        { name: 'HTML/CSS', level: 95, color: 'from-orange-500 to-orange-600' },
      ],
    },
    {
      title: 'Backend',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 85, color: 'from-green-500 to-green-600' },
        { name: 'Python', level: 80, color: 'from-blue-500 to-indigo-600' },
        { name: 'Express', level: 85, color: 'from-gray-500 to-gray-600' },
        { name: 'MongoDB', level: 75, color: 'from-green-600 to-green-700' },
        { name: 'PostgreSQL', level: 70, color: 'from-blue-600 to-blue-700' },
      ],
    },
    {
      title: 'Tools & Others',
      icon: '🛠️',
      skills: [
        { name: 'Git', level: 90, color: 'from-red-500 to-red-600' },
        { name: 'Docker', level: 75, color: 'from-blue-500 to-cyan-600' },
        { name: 'AWS', level: 70, color: 'from-orange-500 to-orange-600' },
        { name: 'Vite', level: 85, color: 'from-purple-500 to-purple-600' },
        { name: 'Figma', level: 80, color: 'from-pink-500 to-purple-600' },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 text-lg">
            Technologies I work with
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4 text-center">{category.icon}</div>
              <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className={`bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

