pipeline {
  agent any
  stages {
    stage("Build") {
      slackSend color: "good", message: "Message from Jenkins Pipeline"
    }
  }
}