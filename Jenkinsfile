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
        stage('Build') {
            steps {
                script {
                    dockerImage = docker.build("${registry}", "--build-arg NODE_ENV=${env.BRANCH_NAME} .")
                }
            }
        }

        // Uploading Docker images into Docker Hub
        stage('Upload') {
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
                    if (env.BRANCH_NAME == "main" || env.BRANCH_NAME == "production") {
                        instanceURL = "ec2-13-229-251-64.ap-southeast-1.compute.amazonaws.com"
                    } else {
                        instanceURL = "ec2-13-229-251-64.ap-southeast-1.compute.amazonaws.com"
                    }

                    sshagent(credentials: ['authentication-server']) {
                        sh "ssh -o StrictHostKeyChecking=no ec2-user@${instanceURL}"
                        sh '''
                            docker stop authentication-server &&
                            docker rm authentication-server &&
                            docker image prune --force
                        '''
                        sh "docker run -d -p 3000:3000 --name authentication-server --network app-network christianbalderrama/authentication-server:${env.BRANCH_NAME}"
                    }
                }
            }
        }
    }
}