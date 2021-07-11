pipeline {
  agent any
  stages {
    stage("Build") {
      steps {
        script {
          def slackMessage = slackSend(
            color: "warning",
            notifyCommitters: true,
            message: '@here Build Stage Started - ${JOB_NAME}-${BUILD_NUMBER}:${BUILD_ID}'
          )
          slackSend(
            channel: slackMessage.threadId,
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
            message: '@here Testing Stage Started - ${JOB_NAME}-${BUILD_NUMBER}:${BUILD_ID}'
          )

          slackSend(
            channel: slackMessage.threadId,
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
            message: '@here Deployment Stage Started - ${JOB_NAME}-${BUILD_NUMBER}:${BUILD_ID}'
          )

          slackSend(
            channel: slackMessage.threadId,
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
        message: '@here Build Started - ${JOB_NAME}-${BUILD_NUMBER}:${BUILD_ID}'
      )
    }
    failure {
      slackSend(
        color: "danger",
        notifyCommitters: true,
        message: '@here Failed - ${JOB_NAME}-${BUILD_NUMBER}:${BUILD_ID}'
      )
    }
  }
}