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
                        sh 'ssh -T -o StrictHostKeyChecking=no ec2-user@18.141.139.11'
                        sh '''
                            docker stop authentication-server &&
                            docker rm authentication-server &&
                            docker image prune --force &&
                            docker run -d -p 3000:3000 --name authentication-server christianbalderrama/authentication-server:${env.BRANCH_NAME}
                        '''
                    }
                }
            }
        }
    }
}