pipeline {
  agent any
  stages {
    stage("Build") {
      steps {
        script {
          def slackMessage = slackSend(
            color: "warning",
            notifyCommitters: true,
            message: 'Build Stage Started - ${JOB_NAME}-${BUILD_NUMBER}:${BUILD_ID}'
          )
          slackSend(
            channel: slackMessage.threadId,
            color: "good",
            message: "Build Stage Done!"
          )
        }
      }
    }
    stage("Test") {
      steps {
        script {
          def slackMessage = slackSend(
            color: "warning",
            notifyCommitters: true,
            message: 'Testing Stage Started - ${JOB_NAME}-${BUILD_NUMBER}:${BUILD_ID}'
          )

          slackSend(
            channel: slackMessage.threadId,
            color: "good",
            message: "Testing Stage Done!"
          )
        }
      }
    }
    stage("Deploy") {
      steps {
        script {
          def slackMessage = slackSend(
            color: "warning",
            notifyCommitters: true,
            message: 'Deployment Stage Started - ${JOB_NAME}-${BUILD_NUMBER}:${BUILD_ID}'
          )

          slackSend(
            channel: slackMessage.threadId,
            color: "good",
            message: "Deployment Stage Done!"
          )
        }
      }
    }
  }
  post {
    success {
      slackSend(
        color: "good",
        notifyCommitters: true,
        message: 'Build Started - ${JOB_NAME}-${BUILD_NUMBER}:${BUILD_ID}'
      )
    }
    failure {
      slackSend(
        color: "danger",
        notifyCommitters: true,
        message: 'Failed - ${JOB_NAME}-${BUILD_NUMBER}:${BUILD_ID}'
      )
    }
  }
}