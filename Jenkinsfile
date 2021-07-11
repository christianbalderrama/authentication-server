pipeline {
  agent any
  stages {
    stage("Build") {
      steps {
        slackSend(color: "warning", message: "Build Stage ...")
      }
    }
    stage("Test") {
      steps {
        slackSend(color: "warning", message: "Test Stage ...")
      }
    }
    stage("Deploy") {
      steps {
        slackSend(color: "warning", message: "Deployment Stage ...")
      }
    }
  }
  post {
    success {
      slackSend(color: "good", message: "Deployment Successful!")
    }
    failure {
      slackSend(color: "error", message: "Failed")
    }
  }
}