pipeline {
  agent any
  stages {
    stage("Build") {
      steps {
        slackSend color: "good", message: "Message from Jenkins Pipeline"
      }
    }
  }
}