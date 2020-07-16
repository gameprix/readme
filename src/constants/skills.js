const baseURL = 'https://konpa.github.io/devicon/devicon.git/icons/';
const skills = ['vuejs', 'react', 'angularjs', 'amazonwebservices', 'android', 'backbonejs',
    'bootstrap', 'c', 'coffeescript',
    'cplusplus', 'css3', 'csharp', 'd3js', 'django', 'docker', 'dotnet', 'electron', 'go',
    'gulp', 'html5', 'java', 'javascript', 'typescript', 'laravel', 'mongodb', 'mysql', 'php', 'postgresql',
    'rails', 'redis', 'redhat', 'ruby', 'rust',
    'sass', 'scala', 'nodejs', 'python', 'swift', 'oracle', 'nginx'];
const icons = {
    vuejs: 'vuejs/vuejs-original-wordmark.svg',
    react: 'react/react-original-wordmark.svg',
    angularjs: 'angularjs/angularjs-original.svg',
    amazonwebservices: 'amazonwebservices/amazonwebservices-original-wordmark.svg',
    android: 'android/android-original-wordmark.svg',
    backbonejs: 'backbonejs/backbonejs-original-wordmark.svg',
    bootstrap: 'bootstrap/bootstrap-plain.svg',
    c: 'c/c-original.svg',
    coffeescript: 'coffeescript/coffeescript-original-wordmark.svg',
    cplusplus: 'cplusplus/cplusplus-original.svg',
    css3: 'css3/css3-original-wordmark.svg',
    csharp: 'csharp/csharp-original.svg',
    d3js: 'd3js/d3js-original.svg',
    django: 'django/django-original.svg',
    docker: 'docker/docker-original-wordmark.svg',
    dotnet: 'dot-net/dot-net-original-wordmark.svg',
    electron: 'electron/electron-original.svg',
    express: 'express/express-original-wordmark.svg',
    git: 'git/git-original-wordmark.svg',
    go: 'go/go-original.svg',
    gulp: 'gulp/gulp-plain.svg',
    html5: 'html5/html5-original-wordmark.svg',
    illustrator: 'illustrator/illustrator-plain.svg',
    java: 'java/java-original-wordmark.svg',
    javascript: 'javascript/javascript-original.svg',
    laravel: 'laravel/laravel-plain-wordmark.svg',
    meteor: 'meteor/meteor-original-wordmark.svg',
    mongodb: 'mongodb/mongodb-original-wordmark.svg',
    mysql: 'mysql/mysql-original-wordmark.svg',
    nginx: 'nginx/nginx-original.svg',
    nodejs: 'nodejs/nodejs-original-wordmark.svg',
    oracle: 'oracle/oracle-original.svg',
    photoshop: 'photoshop/photoshop-plain.svg',
    php: 'php/php-original.svg',
    postgresql: 'postgresql/postgresql-original-wordmark.svg',
    python: 'python/python-original-wordmark.svg',
    rails: 'rails/rails-original-wordmark.svg',
    redis: 'redis/redis-original-wordmark.svg',
    redhat: 'redhat/redhat-original-wordmark.svg',
    ruby: 'ruby/ruby-original-wordmark.svg',
    rust: 'rust/rust-plain.svg',
    sass: 'sass/sass-original.svg',
    scala: 'scala/scala-original-wordmark.svg',
    sketch: 'sketch/sketch-original-wordmark.svg',
    swift: 'swift/swift-original-wordmark.svg',
    typescript: 'typescript/typescript-original.svg'
}

const initialSkillState = {}
skills.forEach(skill => {
    initialSkillState[skill] = false
});

export { initialSkillState, baseURL, icons, skills };