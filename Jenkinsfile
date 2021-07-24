pipeline {
    agent any 
    environment {
        registry = "christianbalderrama/authentication-server:${env.BRANCH_NAME}"
        registryCredential = 'DockerHub'
        dockerImage = ''
        instanceURL = ''
    }
    
    stages {
        // Building Docker images
        stage('Building Image') {
            steps {
                script {
                    dockerImage = docker.build("${registry}", "--build-arg NODE_ENV=${env.BRANCH_NAME} .")
                }
            }
        }

        // Uploading Docker images into Docker Hub
        stage('Upload Image') {
            steps {
                script {
                    docker.withRegistry('', registryCredential) {
                        dockerImage.push("${env.BRANCH_NAME}")
                    }
                }
            }
        }

        // Deployment
        stage('Deployment') {
            steps {
                script {
                    sshagent(['authentication-server']) {
                        sh 'ssh -o StrictHostKeyChecking=no ec2-user@ec2-18-141-58-123.ap-southeast-1.compute.amazonaws.com'
                        sh '''
                            docker stop authentication-server &&
                            docker rm authentication-server &&
                            docker rmi authentication-server &&
                            docker run -d -p 3000:3000 --name authentication-server christianbalderrama/authentication-server:main
                        '''
                    }
                }
            }
        }
  }
}